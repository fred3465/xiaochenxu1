Page({
  data: {
    list: [
      {
        id: 1,
        date: "2026-04-06",
        desc: "第一次独立拼好100片拼图",
        cover: "/assets/images/photo-1.svg"
      },
      {
        id: 2,
        date: "2026-04-11",
        desc: "春游时收集了好多小树叶",
        cover: "/assets/images/photo-2.svg"
      },
      {
        id: 3,
        date: "2026-04-15",
        desc: "睡前讲故事会主动提问题",
        cover: "/assets/images/photo-3.svg"
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
