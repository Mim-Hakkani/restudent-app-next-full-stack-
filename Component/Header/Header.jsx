import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.css'

const Header = () => {
    return (
          
        <div className={styles.navbar}> 
           <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-2 d-flex align-items-center">
                        <div className="logo">
                            <Image src="/img/telephone.png" height={30} width={30} alt="" />
                        </div>
                        <div className="desc ms-4">
                          <p>Order Now <br/>018168746</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <nav>
                            <ul className={styles.link}>
                                <Link href="/">Home</Link >
                                <Link href="/product">Product</Link >
                                <Link href="/menu">Menu</Link >
                                <Link href="/" passHref>
                                   <Image src="/img/logo.png"  alt="logo" height={40} width={80} />
                                </Link>
                                <Link href="/event">Event</Link >
                                <Link href="/blog">Blog</Link >
                                <Link href="/contact">Contact</Link >
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 pt-3">
                    {/* <Image 
                     src="/img/cart.png" 
                      alt="logo" 
                      height={30}
                      width={30}
                      className="position-relative"
                      
                      /> 

                     <span 
                     className="
                     position-absolute 
                     top-40 
                     start-100 
                    
                     translate-middle
                      badge rounded-pill 
                      bg-danger">
                         99+
                  
                      </span>    */}

           <span className=" position-relative">
                 <Image 
                     src="/img/cart.png" 
                      alt="logo" 
                      height={30}
                      width={30}
                  
                      
                      />
  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning">
    10+
    {/* <span className="visually-hidden">unread messages</span> */}
  </span>
</span>
                    </div>
                    
                </div>
          
            </div>
        </div>
    );
};

export default Header;