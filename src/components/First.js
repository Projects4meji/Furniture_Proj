import React from "react";
import { HomeGrid } from "../assets/CardItems";
import ProdGrid from "../childComp/ProdGrid";

function Mapping(props){
    return(
        <ProdGrid
            key = {props.id}
            tag = {props.tag}
            img = {props.img}
            name = {props.name}
            context = {props.context}
            price = {props.price}
            discount = {props.discount}
        />
    );
}

function First(){
    return(
        <div>
            <section className="items-center">
                <div className="flex w-screen justify-end h-full bg-cover bg-no-repeat" style={{backgroundImage:"url(../ImgAssets/home/scandinavian-interior-mockup-wall-decal-background.png)"}}>
                    <div className="flex flex-row justify-self-end md:w-1/2 mt-64 mb-32">
                        <div className="flex flex-col justify-center rounded-lg gap-4 px-10 py-5 mx-7 2xl:mr-32 lg:py-10 bg-orange-50">
                            <p className="font-bold font-mono 2xl:text-xl ml-6">New Arrival</p>
                            <h1 className="font-bold text-yellow-600 font-sans text-3xl ml-6 leading-tight xl:text-6xl">Discover Our <br/> New Collection</h1>
                            <p className="font-medium font-sans ml-6 lg:mr-6 2xl:text-xl leading-tight">It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.</p>
                            <div className="mr-24 mt-6">
                                <button type="button" className="flex justify-start rounded-none border-2 border-orange-50 text-white bg-yellow-600 ml-5 px-7 py-5 lg:mt-2 md:py-6 md:px-14 lg:ml-5 text-base font-extrabold hover:bg-white hover:text-yellow-600 hover:border-yellow-600">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-screen m-10 p-5" style={{fontFamily:"'Poppins', sans-serif"}}>
                <h2 className="text-center font-bold xl:text-3xl font-whisper">Browse The Range</h2>
                <p className="text-center">It is a long established fact that a reader will be distracted by the styling</p>
            </div>
            <div className="" style={{fontFamily:"'Poppins', sans-serif"}}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 justify-center mx-24 lg:mx-52 gap-4">
                    <div className="justify-self-center">
                        <img className="rounded-lg justify-self-center" src="../ImgAssets/grid/img106.png" alt=""/>
                        <p className="text-center font-bold xl:text-3xl py-2">Dining</p>
                    </div>
                    <div className="justify-self-center">
                        <img className="rounded-lg justify-self-center" src="../ImgAssets/grid/img101.png" alt=""/>
                        <p className="text-center font-bold xl:text-3xl py-2">Bedroom</p>
                    </div>
                    <div className="justify-self-center">
                        <img className="rounded-lg object-right justify-self-center" src="../ImgAssets/grid/img106.png" alt=""/>
                        <p className="text-center font-bold xl:text-3xl py-2">Living</p>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center mx-20 my-10 xl:my-10">
                <div className="flex flex-col">
                    <h2 className="justify-self-center text-center font-bold text-xl md:text-3xl text-slate-800">Our Products</h2>
                </div>
                <div className="grid sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 justify-center my-9 xl:gap-4 gap-8"> 
                    {HomeGrid.map(Mapping) }
                </div>
            </div>
            <div class="flex justify-center text-center">
                <button class="py-4 px-4 md:px-8 border-2 rounded-none  border-yellow-700 text-yellow-700 xl:text-xl font-bold hover:text-white hover:bg-yellow-700">Show More</button>
            </div>
        </div>
    );
}

export default First;