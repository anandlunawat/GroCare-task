
export default function Loader() {
    
    const cardIndices = Array.from({ length: 15 }, (_, index) => index);


    return (        
        <div>
        <div className="w-full grid grid-cols-3 gap-12 max-sm:grid-cols-1 p-4 lg:grid-cols-5 lg:gap-12 overflow-hidden h-[100vh]">
          {/* Map over the card indices and render the cards */}
          {cardIndices.map((index) => (
            <div className="flex flex-col w-full gap-4" key={index}>
              <div className="h-80 rounded-xl mt-4 bg-[#656565d4]"></div>
              <div className="w-[50%] h-6 self-center bg-[#656565d4]"></div>              
            </div>
          ))}
        </div>
      </div>
        // </Layout>
    )
}