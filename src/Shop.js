import React from "react";
import ProdGrid from "./childComp/ProdGrid";
import Services from "./childComp/Services";
import { ShopGrid } from "./assets/CardItems";


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

function Shop(){
    return(
        <div style={{fontFamily:"'Poppins', sans-serif"}}>
            <div class="flex flex-col h-96 w-screen items-center justify-center">
                <div class="flex flex-col justify-center align-middle items-center bg-no-repeat bg-cover h-full w-screen" style={{backgroundImage: "url('../ImgAssets/home/banshop.png')"}}>
                    <p class="text-4xl font-bold">Shop</p>
                    <p class="text-xl pt-3 font-bold">Home {'>'} <span class="font-medium">Shop</span></p>
                </div>
            </div>
            <div class="flex flex-row flex-wrap justify-center py-8 bg-orange-50 lg:justify-around gap-12">
                <div class="flex justify-self-center lg:justify-start lg:divide-x-2 gap-8">
                    <div class="flex flex-row align-middle items-center gap-8">
                        <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="system-uicons:filtering">
                                <path id="Vector" d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <p class="xl:text-2xl font-medium">Filter</p>
                        <svg class="ml-3" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ci:grid-big-round">
                                <path id="Vector" d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z" fill="black"/>
                            </g>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="bi:view-list">
                                <path id="Vector" d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
                            </g>
                        </svg>
                    </div>
                    <div class="flex align-middle items-center lg:pl-8">
                        <p class="xl:text-lg hidden lg:block" >Showing 1–16 of 32 results</p>
                    </div>
                </div>
                <div class="flex xl:justify-end items-center gap-6 lg:first-letter:mr-14">
                    <p class="xl:text-2xl font-medium">Show</p>
                    <input placeholder="16" class="bg-white self-center p-4 w-14 text-center"/>
                    <p class="xl:text-2xl font-medium">Sort by</p>
                    <input placeholder="Default" class="bg-white self-center p-4 w-24 xl:w-44"/>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 justify-center my-9 mx-8 xl:gap-4 gap-8"> 
                {ShopGrid.map(Mapping)}
            </div>
            <div class="flex flex-row justify-center gap-2 lg:gap-6 mb-24 text-base lg:text-xl">
                <button class="py-6 px-8 rounded-xl bg-orange-50 hover:bg-yellow-700 hover:text-white">1</button>
                <button class="py-6 px-8 rounded-xl bg-orange-50 hover:bg-yellow-700 hover:text-white">2</button>
                <button class="py-6 px-8 rounded-xl bg-orange-50 hover:bg-yellow-700 hover:text-white">3</button>
                <button class="py-6 px-8 rounded-xl font-medium bg-orange-50 hover:bg-yellow-700 hover:text-white">Next</button>
            </div> 

            <div class="divide-y-2">
                <Services/>
            </div>
        </div>

    );
}

export default Shop;