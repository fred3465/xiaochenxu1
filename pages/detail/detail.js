Page({
  data: { date: "", desc: "", cover: "", liked: false, fav: false },
  onLoad(q) {
    this.setData({
      date: q.date || "",
      desc: decodeURIComponent(q.desc || ""),
      cover: decodeURIComponent(q.cover || "")
    });
  },
  toggleLike() {
    this.setData({ liked: !this.data.liked });
    wx.vibrateShort({ type: "light" });
  },
  toggleFav() {
    const fav = !this.data.fav;
    this.setData({ fav });
    wx.showToast({ title: fav ? "已收藏" : "已取消收藏", icon: "none" });
  }
});
