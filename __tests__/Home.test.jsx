import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "../src/app/page"
import Navbar from "../components/Navbar"
import Banner from "../components/banner/Banner"
import ImageSlider from "../components/ImageSlider"
import About from "../components/about/About"

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
      h2: ({ children, ...props }) => {
        const { animate, whileInView, ...validProps } = props;
        return <h2 style={{ ...(animate || whileInView) }} {...validProps}>{children}</h2>;
      },
      p: ({ children, ...props }) => {
        const { animate, whileInView, ...validProps } = props;
        return <p style={{ ...(animate || whileInView) }} {...validProps}>{children}</p>;
      },

    },
    // useEmblaCarousel: jest.fn(() => {
    //   return [jest.fn(), { selectedScrollSnap: jest.fn(() => 0), on: jest.fn() }];
    // }),
  }));
  

    // mock data 
    const bannerImagesTest = [
      {src:"/fields_d.png",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
      {src:"/fields_e.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
      {src:"/fields_f.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
      {src:"/fields_g.jpg",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
      ]
  

// following the triple A pattern for testing

describe("Home Component",()=>{
    describe("Rendering componenets",()=>{
        it("Navbar should render",()=>{
            // ARRANGE
            render(<Navbar/>);

            // ACT
            const navbarComp = screen.getByRole("navigation");

            // ASSERT
            expect(navbarComp).toBeInTheDocument()

        })
        it("Banner should render",()=>{
            // ARRANGE
            render(<Banner bannerImages={bannerImagesTest}/>);
            // ACT
            const bannerComp = screen.getByTestId("banner-component");
            
            // ASSERT
            expect(bannerComp).toBeInTheDocument()

        })
        
        it("About should render",()=>{
            // ARRANGE
            render(<About/>);
            // ACT
            const aboutComp = screen.getByTestId("about-component");
            
            // ASSERT
            expect(aboutComp).toBeInTheDocument()

        })

        // it("Slider should render",()=>{
        //     // ARRANGE
        //     render(<ImageSlider/>);
        //     // ACT
        //     const sliderComp = screen.getByTestId("slider-component");
            
        //     // ASSERT
        //     expect(sliderComp).toBeInTheDocument()

        // })

        it("Next button should render",()=>{
          render(<Banner bannerImages={bannerImagesTest}/>);

            const btnElm = screen.getByTestId("next-image-btn-component");

            expect(btnElm).toBeInTheDocument();
        })
    })

    describe("Behavious",()=>{

        it("Image change after 10 sec",async()=>{
            render(<Banner bannerImages={bannerImagesTest}/>);
            const initialImage = screen.getByTestId("background-image")
            
            jest.useFakeTimers();
            jest.advanceTimersByTime(10000);  // set a timer till image changes

            const updatedImage = screen.findByTestId("background-image")

            expect(updatedImage).not.toBe(initialImage); // chekc images 

            jest.useRealTimers();
        })

        it("Should change Background image",async()=>{
            render(<Banner bannerImages={bannerImagesTest}/>);

            const btnelem = screen.getByTestId("next-image-btn-component");
            const initialImage = screen.getByTestId("background-image")

            await userEvent.click(btnelem);

            jest.useFakeTimers();
            jest.advanceTimersByTime(1200); // set a timer till image changes
            
            const updatedImage = screen.findByTestId("background-image")

            expect(updatedImage).not.toBe(initialImage); // chekc images 

            jest.useRealTimers();
        })

        it("Should change next Button image",async()=>{
            render(<Banner bannerImages={bannerImagesTest}/>);

            const btnelem = screen.getByTestId("next-image-btn-component");
            const initialImage = screen.getByTestId("next-btn-image")

            await userEvent.click(btnelem);
            jest.useFakeTimers();
            jest.advanceTimersByTime(1200); // set a timer till image changes
            
            const updatedImage = screen.findByTestId("next-btn-image")

            expect(updatedImage).not.toBe(initialImage); // chekc images 

            jest.useRealTimers();
        })
    })

    describe("Animation Completion",()=>{
        it("header completes animation", async () => {
            render(<About />);
            const heading = screen.getByTestId("about-header");
        
            expect(heading).toHaveStyle("opacity: 1");
        });
        it("description completes animation", async () => {
            render(<About />);
            const heading = screen.getByTestId("about-desc");
        
            expect(heading).toHaveStyle("opacity: 1");
        });
        
    })
})




// describe("Home Component",()=>{
    
//     it("should have hello text",()=>{
//         render(<Home />);  // A - ARRANGE (everyting for the test)
    
//         const myElem = screen.getByText("HELLO")  // A - ACTION (that we take) 
//         // - acting to test if HELLO is present using screen's methods
    
        
//         expect(myElem).toBeInTheDocument() // A - ASSERTION (we check to make sure everything is as we expect it to be)
//         // here we correct is it in our document as expected
    
//     })
//     //* Test: The Home component that we are rendering should have the word HELLO in it

// })

