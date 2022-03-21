var canvas=new fabric.Canvas('my_Canvas');

block_img_width= 30;
block_img_height= 30;

player_x= 10;
player_y= 10;

var player_object="";
var square_block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y , 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img){
    fabric.Image.fromURL(get_img , function(Img){
        square_block_img_object=Img;

        square_block_img_object.scaleToWidth(block_img_width);
        square_block_img_object.scaleToHeight(block_img_height);
        square_block_img_object.set({
            top:player_y ,
            left:player_x
        });
        canvas.add(square_block_img_object);
    });
}