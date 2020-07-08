import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'products',
    templateUrl: 'products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductComponent implements OnInit, AfterViewInit {
    allProducts:any; savedAllProducts:any;

    range1:any=750; range2:any=750

    checkbox0:any;checkbox1:any; checkbox2:any; checkbox3:any; checkbox4:any; checkbox5:any; checkbox6:any; checkbox7:any;

    select:any

    noMobile:object;
    noSearch:object;

    downRightNajnovije:object
    downRightSnizenje:object
    downRightSviUredjaji:object

    turn90deg:object={
        "transform":"rotate(90deg)",
        "transition":".5s"
    }

    turn0deg={
        "transform":"rotate(0deg)",
        "transition":".5s"
    }

    searchInput:object;
    off:boolean;
    searchedText:string="";
    halfLoading:object;

    constructor(private http:HttpClient) {
        this.showContent("")
        setInterval(()=>{
            this.disable()
        },0)
    }

    ngAfterViewInit(): void { }

    ngOnInit() { }

    showInput(){
        this.searchInput={
            "width":"250px",
            "left":"-700%"
        }
    }

    hideInput(){
        this.searchInput={
            "width":"35px",
            "left":"-8%"
        }
    }

    checkRange1():void{
        //setInterval(()=>
        //{
            if(this.range1>this.range2)
            this.range1=this.range2;
            console.log('haris');
            
        //},500)
    }

    checkRange2():void{
        //setInterval(()=>
        //{
            if(this.range2<this.range1)
            this.range2=this.range1;
            console.log('haris2');
            
        //},500)
    }

    filtersBar():void{
        document.getElementById('filters').style.display="flex"
        document.getElementById('darkCurtainFilters').style.display="block"
        let time1=setTimeout(()=>{
            document.getElementById('filters').style.left="0%"
            document.getElementById('darkCurtainFilters').style.opacity=".8"
            clearTimeout(time1)
        },500)
    }

    disable():void{
        (this.checkbox0==true) ? this.off=true:this.off=false
    }

    filter():void{

        this.noMobile={
            "display":"none"
        }

        if(this.checkbox0==true)
        this.allProducts=this.savedAllProducts
        else
        {
            //for range
            this.allProducts=this.savedAllProducts.filter((value:any)=>{
                return value.cijena>=this.range1 && value.cijena<=this.range2
            })
            
            //for checkbox
            let filteredProducts:any[]=[];
            let filteredProducts2:any[]=[];
            if(this.checkbox1==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='samsung'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox2==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='lg'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox3==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='zte'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox4==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='lenovo'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox5==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='huawei'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox6==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='apple'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            if(this.checkbox7==true){
                filteredProducts=this.allProducts.filter((value:any)=>{
                    return value.proizvodjac==='xaomi'
                })
                filteredProducts2=filteredProducts2.concat(filteredProducts)
            }
            
            //for select
            if(this.select=='poStarosti'){
                //this.allProducts=this.savedAllProducts
                //console.log("po starosti");
                //console.log("drugi"+this.select);

                for(let i=0;i<filteredProducts.length;i++){
                    filteredProducts.sort((a,b)=>{
                        if(a['godina proizvodnje']>b['godina proizvodnje'])
                        return 1
                        else if(a['godina proizvodnje']<b['godina proizvodnje'])
                        return -1
                        else 
                        return 0
                    })
                }
            }
            else if(this.select=='poNazivu'){
                //this.allProducts=this.savedAllProducts
                //console.log("po nazivu");
                

                for(let i=0;i<filteredProducts.length;i++){
                    filteredProducts.sort((a,b)=>{
                        if(a.proizvodjac.charCodeAt(0)>b.proizvodjac.charCodeAt(0))
                        return 1
                        else if(a.proizvodjac.charCodeAt(0)<b.proizvodjac.charCodeAt(0))
                        return -1
                        else 
                        return 0
                    })
                }
            }
            else if(this.select=='poCijeni'){
                //this.allProducts=this.savedAllProducts
                //console.log("po nazivu");
                

                for(let i=0;i<filteredProducts.length;i++){
                    filteredProducts.sort((a,b)=>{
                        if(a.cijena>b.cijena)
                        return 1
                        else if(a.cijena<b.cijena)
                        return -1
                        else 
                        return 0
                    })
                }
            }

            if((this.allProducts).length==0)
            this.noMobile={
                "display":"block"
            }

            this.allProducts=filteredProducts2
        }
        this.backFilters()
    }

    backFilters():void{
        document.getElementById('filters').style.left="-100%"
        document.getElementById('darkCurtainFilters').style.opacity="0"
        let time1=setTimeout(()=>{
            document.getElementById('filters').style.display="none"
            document.getElementById('darkCurtainFilters').style.display="none"
            clearTimeout(time1)
        },2000)
    }

    getSearchedProduct():void{
        
        this.allProducts=[]
        let allProducts2:any=[]
        
        this.noSearch={
            "display":"none"
        }

        this.halfLoading={
            "display":"flex"
        }

        if(this.searchedText==""){
            this.noSearch={
                "display":"block"
            }
            this.halfLoading={
                "display":"none"
            }
        }
        else{
            if(this.searchedText.trim().includes(" ")){
                let searchedText2:any=this.searchedText.trim().split(' ')
                if(searchedText2.length==2){
                    const URL='http://localhost:4000/getSearchedProduct/?proizvodjac='+searchedText2[0]+'&model='+searchedText2[(searchedText2.length)-1]+'';
                    this.http.get(URL).subscribe(response=>{
                        allProducts2=response
                        if((allProducts2).length==0){
                            this.noSearch={
                                "display":"block"
                            }
                            this.halfLoading={
                                "display":"none"
                            }
                        }
                    })
                }
                else
                {
                    this.noSearch={
                        "display":"block"
                    }
                    this.halfLoading={
                        "display":"none"
                    }
                }
            }
            else
            {
                this.noSearch={
                    "display":"block"
                }
                this.halfLoading={
                    "display":"none"
                }
            }
        }
        setTimeout(() => {
            this.halfLoading={
                "display":"none"
            }
            this.allProducts=allProducts2
        }, 4000);
    }
    
    showContent(name:string)
    { 
        this.halfLoading={
            "display":"flex"
        }
        this.allProducts=[]

        switch(name){
            case('najnovije'):{
                this.downRightNajnovije=this.turn90deg
                this.downRightSnizenje=this.turn0deg
                this.downRightSviUredjaji=this.turn0deg
                const URL='http://localhost:4000/getProductsOnAction'
                
                setTimeout(() => {
                    this.halfLoading={
                        "display":"none"
                    }
                    this.http.get(URL).subscribe(response=>{
                        this.allProducts=response
                    })
                }, 4000);
                break;
            }
            case('snizenje'):{
                this.downRightNajnovije=this.turn0deg
                this.downRightSnizenje=this.turn90deg
                this.downRightSviUredjaji=this.turn0deg
                const URL='http://localhost:4000/getProductsOnNewest'
                setTimeout(() => {
                    this.halfLoading={
                        "display":"none"
                    }
                    this.http.get(URL).subscribe(response=>{
                        this.allProducts=response
                    })
                }, 4000);
                break;
            }
            case('sviUredjaji'):{
                this.downRightNajnovije=this.turn0deg
                this.downRightSnizenje=this.turn0deg
                this.downRightSviUredjaji=this.turn90deg
                const URL='http://localhost:4000/getAllUser'
                setTimeout(() => {
                    this.halfLoading={
                        "display":"none"
                    }
                    this.http.get(URL).subscribe(response=>{
                        this.allProducts=response
                    })
                }, 4000);
                break;
            }
            default:{
                this.downRightNajnovije=this.turn0deg
                this.downRightSnizenje=this.turn0deg
                this.downRightSviUredjaji=this.turn90deg
                const URL='http://localhost:4000/getAllUser'
                setTimeout(() => {
                    this.halfLoading={
                        "display":"none"
                    }
                    this.http.get(URL).subscribe(response=>{
                        this.allProducts=response
                    })
                }, 4000);
                break;
            }
        }
    }

    /*createProductShape():void{
        for(let i=0;i<(this.allProducts).length;i++){

            let time=setTimeout(()=>{
                var nameModelShape=document.createElement('div')
                nameModelShape.innerHTML=this.allProducts[i].proizvodjac+" "+this.allProducts[i].model

                var priceShape=document.createElement('div')
                priceShape.innerHTML=this.allProducts[i].cijena

                var dataShape=document.createElement('div')
                dataShape.id='borderBottomRight'
                dataShape.style.borderRight="1px solid black"
                dataShape.style.borderBottom="1px solid black"
                dataShape.appendChild(nameModelShape)
                dataShape.appendChild(priceShape)
                
                var picture=document.createElement('img')
                picture.src=this.allProducts[i].slika
                picture.width=200
                var pictureShape=document.createElement('div')
                pictureShape.id="borderLeftTop"
                pictureShape.style.borderTop="1px solid black"
                pictureShape.style.borderLeft="1px solid black"
                pictureShape.appendChild(picture)

                var dataPictureShape=document.createElement('div')
                dataPictureShape.appendChild(pictureShape)
                dataPictureShape.appendChild(dataShape)
                dataPictureShape.id="createdProduct"
                dataPictureShape.style.padding="10px"
                
                document.getElementById('product').appendChild(dataPictureShape)
            },1000)

            //clearTimeout(time)
        }
    }*/
}