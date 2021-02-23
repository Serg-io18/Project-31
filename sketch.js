const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100
var drops = [];
var createDrop;
var Batman

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,1000);
    engine = Engine.create();
    world = engine.world;

    Batman = new Man(200,900);

    createDrop = new Drop();
    for (var i = 0; i < maxDrops; i++) {
        drops.push(new createDrop(random(0,400),random(0,400)));
    }
}

function draw(){
    background("black")
    
    createDrop.display();
    Batman.dislay();
}   

