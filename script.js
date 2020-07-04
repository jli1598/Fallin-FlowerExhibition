let rnd = (l,u) => Math.floor(Math.random() * (u-l) + l)

class Cone{
  constructor(){
    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("position",{x:-0.207,y:14.946,z:16.968});
    this.obj.setAttribute("scale",{x:1,y:1.743,z:1});
    this.obj.setAttribute("material",{src:"gold.jpg"});
    this.obj.setAttribute("geometry",{radiusBottom:"11", radiusTop:"12"});
   
  }
}

class Cylinder{
  constructor(){
    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("position",{x:-0.207,y:0.735,z:16.968});
    this.obj.setAttribute("scale",{x:1,y:0.485,z:1});
    this.obj.setAttribute("material",{src:"gold.jpg"});
    this.obj.setAttribute("radius",11);
  }
}
class Cylinder2{
  constructor(){
    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("position",{x:-0.207,y:5.538,z:16.968});
    this.obj.setAttribute("scale",{x:1,y:12.605,z:1});
    this.obj.setAttribute("material",{src:"theatre.jpg"});
    this.obj.setAttribute("radius",3);
  }
}
class Cone3{
  constructor(){
    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("position",{x:-0.207,y:15.712,z:16.968});
    this.obj.setAttribute("scale",{x:1,y:8.405,z:1});
    this.obj.setAttribute("material",{src:"gold.jpg"});
    this.obj.setAttribute("geometry",{radiusBottom:"3", radiusTop:"10"});
  }
}
class Cylinder3{
  constructor(){
    this.obj = document.createElement("a-cylinder");
    this.obj.setAttribute("position",{x:-0.207,y:0.783,z:16.968});
    this.obj.setAttribute("scale",{x:1,y:0.485,z:1});
    this.obj.setAttribute("material",{src:"sand.jpg"});
    this.obj.setAttribute("radius",10.7);
  }
}
class poleA{
  constructor(){
    this.obj = document.createElement("a-entity");

    let part1 = document.createElement("a-cylinder");
    part1.setAttribute("position",{x:6.314,y:7.796,z:11.318});
    part1.setAttribute("scale",{x:1,y:14.183,z:1});
    part1.setAttribute("material",{src:"pole.png"});
    part1.setAttribute("radius",0.1);
    this.obj.appendChild(part1);
    
    //center cloud
    let part2 = document.createElement("a-sphere");
    part2.setAttribute("position",{x:6.314,y:4.000,z:11.318});
    part2.setAttribute("material",{opacity:"0.9"});
    this.obj.appendChild(part2);

    //cloud puffs
    let part3 = document.createElement("a-sphere");
    part3.setAttribute("position",{x:5.045,y:4.064,z:10.467});
    part3.setAttribute("scale",{x:1.456,y:1.260,z:1.556});
    part3.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part3);
    
    let part4 = document.createElement("a-sphere");
    part4.setAttribute("position",{x:5.182,y:4.533,z:12.244});
    part4.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part4);
  
    let part5 = document.createElement("a-sphere");
    part5.setAttribute("position",{x:5.421,y:4.583,z:9.633});
    part5.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part5);
 
    let part6 = document.createElement("a-sphere");
    part6.setAttribute("position",{x:7.050,y:4.280,z:13.190});
    part6.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part6);
  
    let part7 = document.createElement("a-sphere");
    part7.setAttribute("position",{x:7.503,y:3.996,z:11.902});
    part7.setAttribute("scale",{x:1.544,y:1.647,z:1.524});
    part7.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part7);
    
    let part8 = document.createElement("a-sphere");
    part8.setAttribute("position",{x:6.231,y:4.331,z:11.615});
    part8.setAttribute("scale",{x:1.691,y:0.961,z:2.399});
    part8.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part8);

    let part9 = document.createElement("a-sphere");
    part9.setAttribute("position",{x:6.989,y:4.220,z:9.775});
    part9.setAttribute("scale",{x:1.388,y:1.429,z:1.437});
    part9.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part9);

    let part10 = document.createElement("a-sphere");
    part10.setAttribute("position",{x:5.921,y:4.054,z:12.576});
    part10.setAttribute("scale",{x:1.925,y:1.677,z:1.489});
    part10.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part10);
    
    let poleClass = this;
    this.spinP1 = false;

    this.obj.addEventListener("click", function(obj){
      poleClass.spinP1 = true;
    })
  }
  spin___(){
    if(this.spinP1){
      this.theta += Math.PI /800;
    }
    let x = size2 * Math.cos(this.theta);
    let y = size2 * Math.sin(this.theta);
    this.obj.setAttribute("position",{x:x-6,y:0,z:y+4.5});
    
  }
}
class poleB{
  constructor(){
    this.obj = document.createElement("a-entity");
    let part1 = document.createElement("a-cylinder");
    part1.setAttribute("position",{x:6.314,y:7.796,z:11.318});
    part1.setAttribute("scale",{x:1,y:14.183,z:1});
    part1.setAttribute("material",{src:"pole.png"});
    part1.setAttribute("radius",0.1);
    this.obj.appendChild(part1);
    
    //center cloud
    let part2 = document.createElement("a-sphere");
    part2.setAttribute("position",{x:6.314,y:4.000,z:11.318});
    part2.setAttribute("material",{opacity:"0.9"});
    this.obj.appendChild(part2);

    //cloud puffs
    let part3 = document.createElement("a-sphere");
    part3.setAttribute("position",{x:5.045,y:4.064,z:10.467});
    part3.setAttribute("scale",{x:1.456,y:1.260,z:1.556});
    part3.setAttribute("material",{opacity:"0.7"});
    part3.setAttribute("material",{color:"#76a385"});
    this.obj.appendChild(part3);

    let part4 = document.createElement("a-sphere");
    part4.setAttribute("position",{x:5.182,y:4.533,z:12.244});
    part4.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part4);

    let part5 = document.createElement("a-sphere");
    part5.setAttribute("position",{x:5.421,y:4.583,z:9.633});
    part5.setAttribute("material",{opacity:"0.7"});
    part5.setAttribute("material",{color:"#76a385"});
    this.obj.appendChild(part5);

    let part6 = document.createElement("a-sphere");
    part6.setAttribute("position",{x:7.050,y:4.280,z:13.190});
    part6.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part6);

    let part7 = document.createElement("a-sphere");
    part7.setAttribute("position",{x:7.503,y:3.996,z:11.902});
    part7.setAttribute("scale",{x:1.544,y:1.647,z:1.524});
    part7.setAttribute("material",{opacity:"0.7"});
    part7.setAttribute("material",{color:"#76a385"});
    this.obj.appendChild(part7);

    let part8 = document.createElement("a-sphere");
    part8.setAttribute("position",{x:6.231,y:4.331,z:11.615});
    part8.setAttribute("scale",{x:1.691,y:0.961,z:2.399});
    part8.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part8);

    let part9 = document.createElement("a-sphere");
    part9.setAttribute("position",{x:6.989,y:4.220,z:9.775});
    part9.setAttribute("scale",{x:1.388,y:1.429,z:1.437});
    part9.setAttribute("material",{opacity:"0.7"});
    part9.setAttribute("material",{color:"#76a385"});
    this.obj.appendChild(part9);

    let part10 = document.createElement("a-sphere");
    part10.setAttribute("position",{x:5.921,y:4.054,z:12.576});
    part10.setAttribute("scale",{x:1.925,y:1.677,z:1.489});
    part10.setAttribute("material",{opacity:"0.7"});
    this.obj.appendChild(part10);
    
    let pole2Class = this;
    this.spinP = false;

    this.obj.addEventListener("click", function(obj){
      pole2Class.spinP = true;
    })
  }
  spin__(){
    if(this.spinP){
      this.theta += Math.PI /800;
    }

    let x = size3 * Math.cos(this.theta);
    let y = size3 * Math.sin(this.theta);
    this.obj.setAttribute("position",{x:x-7,y:0,z:y+4.5});
  }
}
class Sphere{
  constructor(){
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:-12.243,y:0.976,z:-46.846});
    this.obj.setAttribute("material",{color:"white"});
    this.obj.setAttribute("radius",0.5);

    let sphereClass = this;
    this.spinV = false;

    this.obj.addEventListener("mouseenter", function(obj){
      sphereClass.spinV = true;
    })
    
  }

  spin_(){
    if(this.spinV){
      this.theta += Math.PI /1000;
    }

    let x = size * Math.cos(this.theta);
    let y = size * Math.sin(this.theta);
    this.obj.setAttribute("position",{x:x-12.243,y:2.8,z:y-46.7});
  }
}

class butterfly{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dz = 0.05;
        this.obj = document.createElement("a-entity")
        this.obj_ = document.createElement("a-gltf-model")
        this.obj_.setAttribute("src",`#butterfly`);
        this.obj_.setAttribute("position",{x:-37,y:0.5,z:-34.7});
        this.obj_.setAttribute("rotation",{x:90,y:0,z:0});
        this.obj_.setAttribute("scale",{x:0.02,y:0.02,z:0.02});
        this.obj_.setAttribute("animation-mixer","");
        this.obj.append(this.obj_);
        scene.append(this.obj);

        this.move=false;
        let _this=this;
        this.obj.addEventListener("mouseenter",function(obj){
          _this.move=true;
        })
        this.obj.addEventListener("mouseleave",function(obj){
          _this.move=false;
        })
    }
    update(){
      if(this.move==true){
        if(this.x>5 || this.x<-5){
          this.y += this.dz;
          
        }
        if(this.x>5 && this.y>5){
            this.y --;
        }
      }
      this.obj.setAttribute("position",{x:this.x,y:this.y,z:-3});
    }
}


let butterflies=[];


let scene;
let oneSphereTF = false;
let spheres = [];
let n = 6.5;
let size = 7;

let clouds=[];
let size2=9;
let onePolesTF = false;
let n2=2.5;

let clouds2=[];
let onePoleTF = false;
let size3=5;
let n3=2;

function init() {
  scene = document.getElementById("scene");
  
  let theta = Math.PI / n;
  for(let i = 0; i < n*2;i++){
    let x = size * Math.sin(theta * i);
    let sphere = new Sphere();
    sphere.theta = theta * i;
    spheres.push(sphere);
  }
  for(let sphere of spheres){
    scene.append(sphere.obj);
  }


  let theta2 = Math.PI / n2;
  for(let i = 0; i < n2*2;i++){
    let x2 = size2 * Math.sin(theta2 * i);
    pole = new poleA();
    pole.theta=theta2*i;
    clouds.push(pole);
  }
  for(let pole of clouds){
    scene.append(pole.obj);
  }

  let theta3 = Math.PI / n3;
  for(let i = 0; i < n3*2;i++){
    let x3 = size3 * Math.sin(theta3 * i);
    pole2 = new poleB();
    pole2.theta=theta3*i;
    clouds2.push(pole2);
  }
  for(let pole2 of clouds2){
    scene.append(pole2.obj);
  }
  setTimeout(motion,500);
  
  cone = new Cone();
  scene.append(cone.obj);
  cylinder = new Cylinder();
  scene.append(cylinder.obj);
  cylinder2 = new Cylinder2();
  scene.append(cylinder2.obj);
  cone3 = new Cone3();
  scene.append(cone3.obj);
  cylinder3 = new Cylinder3();
  scene.append(cylinder3.obj);

  for(let i = 0; i < 25; i++){
    butterflies.push(new butterfly(rnd(10,29),rnd(1,4.5)))
  }
 

  motion();
}
function motion(){
  for(let sphere of spheres){
    sphere.spin_();

    if(sphere.spinV){
      oneSphereTF = true;
    }
    if(oneSphereTF){
      sphere.spinV = true;
    }
  }
  for(let pole of clouds){
    pole.spin___();
    if(pole.spinP1){
      onePolesTF = true;
    }
    if(onePolesTF){
      pole.spinP1 = true;
    }
  }
  for(let pole2 of clouds2){
    pole2.spin__();
    if(pole2.spinP){
      onePoleTF = true;
    }
    if(onePoleTF){
      pole2.spinP = true;
    }
    
  }
  for(let butterfly of butterflies){
        butterfly.update();
  }
  setTimeout(motion,20);
} 




