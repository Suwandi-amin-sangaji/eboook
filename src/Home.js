import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div>
            <div className='home'>
                <div className="home__container">
                    <img src="https://lh3.googleusercontent.com/919z6VtTopg4IxcoXq1rEwZIhaRqUQ_YwBGuToFfRxrBgkoVUkj3GLu49SyqU7831POp9wwEoAQslKi_fvgg546uWm7zODT9a6hi8ROxIYoGtNRxUjz2F6q2yOVcr-NvRQacbesvAAC4440lPZrSNfgNqh5xmC2YaP_3ekdOfWs1nQakeqnt4HhQ57OiHjs390j4nqMdFSE57P0FDT3ZuESud1NYAoN2g2Z6KeQBGHlTbOI79MzrxtTG5MiOSqJhU1Id2C_7TJkbZHLIndUVs4MTBJJWhC2wjz-R7zbKxWNwAdd8ZagLrXwuhAlFsfDjPHbP3gTG-eKuM3swHmCiRTLRF9CKpbz-ZRdWRWpUMUO3YmNPdx-nduB3zoO98X_HYoodjbkm407JpiMWEC9IcPABZan1kEQ6RqiNLKAT6r1jVN2lSODkx1Ggu1biApY_U0M7wcpTfnlC1ZAWH3_TW3izD9ZUvPokDosQ9KfNVLb1DSD6G2pTwS-95jgvNSxaFq8NDkebytnLdaGn4HUCShwXTm3HXE-OJ14sdq2SmzqethmHj2VgfKIEXRoyViZW_AjCNOEIWvhxdTzXYkJUmMp3q8BIka4Wk6g8pdUox5GvITqzLotcq2717wHSM1iwQHVWy4zhzeSnrjrKmdi-PfmV5rN6I_qmPGJWCfq0O_LIZfEDzDXVn-EwHH0uTqSqBuzhoqlvxbT5R_CKtiZBG5U=w1116-h558-no?authuser=0" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="123456789"
                            title='Buku pemrograman'
                            price={110000}
                            rating={5}
                            image='https://s.kaskus.id/r480x480/images/fjb/2016/03/20/galery_berbagai_macam_buku_teknik_informatika___ilmu_komputer___sistem_informasi_3878984_1458443498.jpg'
                        />
                        <Product
                            id="198198198"
                            title='Buku pemrograman'
                            price={90000}
                            rating={5}
                            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM9y6RZfGN7OIqH1fgFpYJYv5F_s6SswX2A&usqp=CAU'
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="123456789"
                            title='Buku pemrograman'
                            price={119000}
                            rating={5}
                            image='http://2.bp.blogspot.com/-xJRw5J3S_GU/VbRVR8aoUNI/AAAAAAAABpU/YKYpieLQnao/s1600/Katalog%2BLengkap%2BBuku%2BTeknik%2BInformatika.jpg'
                        />
                        <Product
                            id="123456789"
                            title='Buku pemrograman'
                            price={120000}
                            rating={5}
                            image='https://images.tokopedia.net/img/cache/700/product-1/2018/12/10/30545631/30545631_a1db935b-4819-46f0-a0d1-d1cbb621d72b_2048_2730.jpg'
                        />
                        <Product
                            id="1831938109"
                            title='Buku pemrograman'
                            price={150000}
                            rating={3}
                            image='https://biobses.com/wp-content/uploads/2020/10/DATA-MINING0.jpg'
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="9138193819"
                            title='Buku pemrograman'
                            price={65000}
                            rating={4}
                            image='https://i0.wp.com/dedysetyo.net/wp-content/uploads/2014/01/owncloud-new.jpg?fit=1000%2C709&ssl=1'
                        />
                        <Product
                            id="9138193819"
                            title='Buku pemrograman'
                            price={100000}
                            rating={4}
                            image='https://images.tokopedia.net/img/cache/700/product-1/2020/8/27/66671978/66671978_b25c332e-af1d-47e4-bbd2-8cf6383d7715_540_540'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
