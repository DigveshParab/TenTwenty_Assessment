import {render,screen} from "@testing-library/react"
import Banner from "../Banner";

jest.mock('framer-motion', () => ({
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: {
      img: ({ children, ...props }) => {
        const { animate, initial, exit, ...validProps } = props;
        return <img {...validProps}>{children}</img>;
      },
      div: ({ children, ...props }) => {
        const { animate, initial, exit, ...validProps } = props;
        return <div {...validProps}>{children}</div>;
      },
      h1: ({ children, ...props }) => {
        const { animate, initial, exit, ...validProps } = props;
        return <h1 {...validProps}>{children}</h1>;
      },
    }
  }));

  // mock data 
  const bannerImagesTest = [
    {src:"/fields_d.png",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
    {src:"/fields_e.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
    {src:"/fields_f.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
    {src:"/fields_g.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
    ]



  describe("Banner Component",()=>{
    it("Parent component should render",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const parentElm = screen.getByTestId("banner-component");
        expect(parentElm).toBeInTheDocument();
    })

    it("check if title renders",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const title = screen.getByTestId("banner-title");
        expect(title).toBeInTheDocument();
    })

    it("check if subtitle renders",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const stitle = screen.getByTestId("banner-subtitle");
        expect(stitle).toBeInTheDocument();
    })

    it("Background image should render",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const bgImage = screen.getByTestId("background-image");
        expect(bgImage).toBeInTheDocument();
    })

    it("Next button component should render",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const nxtImage = screen.getByTestId("next-image-btn-component")
        expect(nxtImage).toBeInTheDocument();
    })

    it("Next button image should render",()=>{
        render(<Banner bannerImages={bannerImagesTest}/>); 
        const nxtImage = screen.getByTestId("next-btn-image")
        expect(nxtImage).toBeInTheDocument();
    })
  })