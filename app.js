const Connpass = require('./connpass');
const community = new Connpass('https://enebular.connpass.com/');

(async () => {
    const c = {};

    c.event = await community.getEventCount();
    c.presentation = await community.getPresentationCount();
    c.presentationPerEvent = c.presentation / c.event; //1回あたりの登壇数平均
    c.uniq_member = await community.getMemberCount();
    c.total_member = await community.getTotalPeople();
    c.new_rate = c.uniq_member / c.total_member; //新規率

    console.log(c);
})();