class BatchController {
  constructor() {
    ((this.unprocessed = []), (this.processed = []), (this.reports = []));
  }
  addBatch(items) {
    this.unprocessed.push(new Batch(this.currentBatchId++, items));
    return this;
  }
  processLatestBatch() {
    if (this.unprocessed.length < 1) return;
    var b = this.unprocessed.shift(),
      rs = [],
      m = [],
      ms = 0,
      f = [],
      fs = 0,
      o = [],
      os = 0,
      qc = b.items[1].items.length,
      ts = b.items.length;
    b.items = b.items.filter((a) => a != null && a.name.length > 0);
    let pq = (items) =>
      items
        .map(
          (v, i) =>
            `#${i}\r\nQuestion: ${v.question}\r\nAnswer: ${v.answer}\r\nUser Answer: ${v.userAnswer}`,
        )
        .join("\r\n");
    for (let i = 0; i < b.items.length; i++) {
      let it = b.items[i];
      it.name.replace(/[\w\s]/, "");
      let ts = it.items.reduce((p, c) => p + (c.answer == c.userAnswer), 0);
      switch (it.gender.toLowerCase()) {
        case "male":
          m.push(it);
          ms += ts;
          break;
        case "female":
          f.push(it);
          fs += ts;
          break;
        default:
          o.push(it);
          os += ts;
          break;
      }
      var pr = `Name: ${it.name}Gender: ${it.gender}Age: ${it.age}\r\n ${pq(it.items)}Total Score: ${ts}\r\n Batch Id: ${b.id}\r\n`;
      rs.push(new SurveyReport(i, it, pr, ts));
    }
    var mt = {
        count: m.length,
        score: `${ms}/${qc * m.length}`,
        percentage: Math.round((ms / (qc * m.length)) * 100) || 0,
      },
      ft = {
        count: f.length,
        score: `${fs}/${qc * f.length}`,
        percentage: Math.round((fs / (qc * f.length)) * 100) || 0,
      },
      ot = {
        count: o.length,
        score: `${os}/${qc * o.length}`,
        percentage: Math.round((os / (qc * o.length)) * 100) || 0,
      },
      rep = `Report Id: ${this.reports.length + 1}Total Surveys Taken: ${ts}\r\nTotal Males: ${mt.count}Total Male Score: ${mt.score}ScorePercentage: ${mt.percentage}%\r\nTotal Females: ${ft.count}Total Female Score: ${ft.score}ScorePercentage: ${ft.percentage}\r\nTotal Others: ${ot.count}Total Other Score: ${ot.score}ScorePercentage: ${ot.percentage}%\r\nBatch Id: ${b.id}`;
    var gr = new GeneralReport(rep, b.id, mt, ft, ot);
    this.reports.push(new Report(b.id, rs, gr));
    this.processed.push(b);
  }
}
