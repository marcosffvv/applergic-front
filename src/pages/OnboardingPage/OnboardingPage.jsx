import React from 'react'
import { Carousel } from 'primereact/carousel';
import imgOnboarding1 from "../../assets/imgOnboarding1.png";
import ApplergicTextoLogo from "../../assets/ApplergicTextoLogo.png";
import "./OnboardingPage.scss";
//import PagesService from '../../components/pagesService';



const OnboardingPage = () => {
  const paginas = [{img: imgOnboarding1, description: "aksjdflkjdlfknd"},{img: imgOnboarding1, description: "aksgggfdfdfhola"}];  // const responsiveOptions = [
  //     {
  //         breakpoint: '1199px',
  //         numVisible: 1,
  //         numScroll: 1
  //     },
  //     {
  //         breakpoint: '991px',
  //         numVisible: 2,
  //         numScroll: 1
  //     },
  //     {
  //         breakpoint: '767px',
  //         numVisible: 1,
  //         numScroll: 1
  //     }
  // ];
  
  const carouselTemplate = (pagina) => {
    return (
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">

            <div className="c-imagen">
                <img className="img-carousel" src={pagina.img} alt="imgOnboarding1"/>
            </div>

            <div>
                <h4 className="texto">{pagina.description}</h4>
                
                {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <Button icon="pi pi-search" className="p-button p-button-rounded" />
                    <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                </div> */}
            </div>
        </div>
    );
  };


  return (
    <div>
    
    <div className="c-logo-texto">
                <img src={ApplergicTextoLogo} alt="ApplergicTextoLogo" className="img-logo-texto" />
            </div>
      <Carousel value={paginas} numVisible={1} numScroll={1} itemTemplate={carouselTemplate} />
    </div>
  )
}

export default OnboardingPage
