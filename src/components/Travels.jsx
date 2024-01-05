import CardTravel from "./CardTravel"

function Travels(props) {
    const { filter } = props
    return (
        <div className="flex justify-center items-center w-full py-5">
            <div className="flex justify-evenly items-center flex-wrap gap-y-5 gap-x-1 w-[90%]">
                {filter.map((item, index) => (
                    <div key={index}>
                        <CardTravel key={index} id={item.id} categoria={item.categoria} nombre={item.nombre} img={item.img} precio={item.precio} />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Travels