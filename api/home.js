import fly from '@/utils/request.js'

//获取首页轮播图
export const getBanners = () => fly.get('/home/swiperdata')
export const getNavList = () => fly.get('/home/catitems')
export const getFloorList = () => fly.get('/home/floordata')
