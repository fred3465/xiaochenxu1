Page({
  data: {
    list: [
      {
        id: 1,
        date: "2026-04-06",
        desc: "第一次独立拼好100片拼图",
        cover: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: 2,
        date: "2026-04-11",
        desc: "春游时收集了好多小树叶",
        cover: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  goDetail(e) {
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `/pages/detail/detail?date=${item.date}&desc=${encodeURIComponent(item.desc)}&cover=${encodeURIComponent(item.cover)}`
    });
  }
});
