import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boots: [
      {
        name: 'Timberland',
        price: 2259,
        image: 'https://images.timberland.com/is/image/timberland/10061024-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 2284,
        image: 'https://images.timberland.com/is/image/timberland/10001628-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 1490,
        image: 'https://images.timberland.com/is/image/timberland/A22M8033-HERO?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 2307,
        image: 'https://images.timberland.com/is/image/TimberlandEU/A1YQC931-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 2599,
        image: 'https://images.timberland.com/is/image/TimberlandEU/A23UWF13-hero?wid=720&hei=720&fit=constrain,1&qlt=85,1&op_usm=1,1,6,0',
        stars: 3,
        totalReviews: 30,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    smartphones: [
      {
        name: 'Adidas',
        price: 1199,
        image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/940fdec8fde64ef6bac4a9fd0004cd61_9366/Alphaboost_Shoes_Blue_G54130_01_standard.jpg',
        stars: 0,
        totalReviews: 0,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'c',
        price: 929,
        image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/30683dba3d844206be2baa4f00a47272_9366/Solar_Glide_19_Shoes_Blue_G28063_01_standard.jpg',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 3949,
        image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/cd64f37be09547b99428aa3901487470_9366/Solar_Glide_19_Shoes_Black_G28062_01_standard.jpg',
        stars: 1,
        totalReviews: 2,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Timberland',
        price: 1943,
        image: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/007995ae7fc64615bb26a9e400f569cd_9366/Pureboost_Go_LTD_Shoes_White_D97424_01_standard.jpg',
        stars: 5,
        totalReviews: 310,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getAllProducts: state => state.boots.concat(state.smartphones),
  },
});
