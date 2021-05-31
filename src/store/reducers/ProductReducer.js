const initState = {
  products: [
    {
      id: 1,
      name: "man t-shirt summer season",
      image: "1.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 2,
      name: "women jacket summer season",
      image: "2.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 3,
      name: "man trouser all season",
      image: "3.jpg",
      price: 15,
      discount: 3,
      discountPrice: 15 - (3 / 100) * 15,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 4,
      name: "shoes women all season",
      image: "4.jpg",
      price: 50,
      discount: 4,
      discountPrice: 50 - (4 / 100) * 50,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 5,
      name: "female suite for summer",
      image: "5.jpg",
      price: 30,
      discount: 5,
      discountPrice: 30 - (5 / 100) * 30,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 6,
      name: "men jeans all season",
      image: "6.jpg",
      price: 60,
      discount: 6,
      discountPrice: 60 - (6 / 100) * 60,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 7,
      name: "male trouser winter season",
      image: "7.jpg",
      price: 35,
      discount: 2,
      discountPrice: 35 - (2 / 100) * 35,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 8,
      name: "male jacket winter season",
      image: "8.jpg",
      price: 80,
      discount: 7,
      discountPrice: 80 - (7 / 100) * 80,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 9,
      name: "male shirt all season",
      image: "9.jpg",
      price: 95,
      discount: 4,
      discountPrice: 95 - (4 / 100) * 95,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
    {
      id: 10,
      name: "male shirt all season",
      image: "10.jpg",
      price: 120,
      discount: 3,
      discountPrice: 120 - (3 / 100) * 120,
      quantity: 1,
      desc: "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments. ... A shirt can also be worn with a necktie under the shirt collar.",
    },
  ],
  product: {},
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };

    default:
      return state;
  }
};
export default ProductReducer;
