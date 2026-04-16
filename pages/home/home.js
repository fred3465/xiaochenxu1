Page({
  data: {
    loaded: false,
    cardFloat: false
  },
  onLoad() {
    setTimeout(() => this.setData({ loaded: true, cardFloat: true }), 80);
  },
  goTimeline() {
    wx.navigateTo({ url: "/pages/timeline/timeline" });
  },
  showToast() {
    wx.showToast({ title: "回忆播放功能演示中", icon: "none" });
  }
});
