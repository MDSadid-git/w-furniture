import React from 'react';
import Card from '../Card/Card';
import bed1 from '../../assets/ProductImage/bed1.jpg'
import bed2 from '../../assets/ProductImage/bed2.jpg'
import bed3 from '../../assets/ProductImage/bed3.jpg'
import sofa1 from '../../assets/ProductImage/sofa1.jpg'
import sofa2 from '../../assets/ProductImage/sofa2.jpg'
import sofa3 from '../../assets/ProductImage/sofa3.jpg'
import light1 from '../../assets/ProductImage/light1.jpg'
import light2 from '../../assets/ProductImage/light2.jpg'
import light3 from '../../assets/ProductImage/light3.jpg'
import dining1 from '../../assets/ProductImage/dining1.jpg'
import dining2 from '../../assets/ProductImage/dining2.jpg'
import dining3 from '../../assets/ProductImage/dining3.jpg'

const ShopProduct = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <Card
                img={sofa1}
                name="Bed"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={sofa2}
                name="Computer Table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={bed1}
                name="Sofa"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={bed2}
                name="Bed side Table"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={dining1}
                name="Center table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={dining2}
                name="Dressing Table"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={light1}
                name="Sowcase"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

              <Card
                img={light2}
                name="Side table"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={bed3}
                name="Tv Trolly"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={sofa3}
                name="Mattress"
                price="1200"
                sku="A-340"
                oldPrice="1500"
              />

              <Card
                img={dining3}
                name="Oven Stand"
                price="45000"
                sku="A-789"
                oldPrice="4900"
              />

              <Card
                img={light3}
                name="Divan"
                price="4000"
                sku="A-780"
                oldPrice="4200"
              />

            </div>
        </>
    );
};

export default ShopProduct;