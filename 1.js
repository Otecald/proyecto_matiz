function Deslizador1(evt){press=1;var X = parseInt(evt.offsetX);Deslizador3(X)}
function Deslizador2(evt)
{
	move=1
	var X = parseInt(evt.offsetX)
	if(press==1 && move==1){Deslizador3(X)}
}
function Deslizador3(x,b)
{
	if(!b){
		matiz.value=x
	}
	ctx2.clearRect(0,0,360,32)
	ctx2.fillStyle="000"
	ctx2.fillRect(0,0,360,32)
	ctx2.beginPath()
	ctx2.arc(X,16,12,0,6.3, false)
	ctx2.fillStyle = "49F"
	ctx2.fill()
	var R=hsv2rgb([matiz.value/360,1,1])
	var M=Math.round
	ctx2.fillStyle = 'rgb('+M(R[0]*256) + ',' + M(R[1]*256) + ','+M(R[2]*256)+')'
	ctx2.font="bold 25px Courier New"
	ctx2.fillText("Matiz:"+X,0,24)
}
function nomp(){press=0;move=0}
function nuevaImagen(a,b,c,d)
{
	var image = new Image()
	if(d==true){image.crossOrigin="anonymous"}
	image.src=a
	if(b){image.width=b}
	if(c){image.height=c}
	return image
}
function init(a)
{
	press=0;move=0
	var b=["sprite.png","Avión2.png","Naturaleza.png"],c=[32,32,1920,1080,1920,1180]
	c1=document.getElementById("cv1"); ctx1=c1.getContext("2d"); cv1.width=c[a*2]; cv1.height=c[a*2+1]
	c2=document.getElementById("cv2"); ctx2=c2.getContext("2d")
	if(esNav()=="chrome"){image=nuevaImagen("https://dl.dropboxusercontent.com/u/3906848/Proyecto%20matiz/"+b[a],c[a*2],c[a*2+1],true)}else{image=nuevaImagen(b[a],c[a*2],c[a*2+1],true)}
	Deslizador3(0)
}

function dibujar(){ctx1.drawImage(image,0,0)}

function fEVT(evt,a,b)
{
	var H=[]
	try{
		var X = parseInt(evt.offsetX)
		var Y = parseInt(evt.offsetY)}
	catch(e){X = a; Y=b}
	var imagedata = ctx1.getImageData(0,0,cv1.width,cv1.height)
	var data = imagedata.data
	var i = (Y*cv1.width+X)*4;
	for(c=0;c<4;c++){H[c]=data[i+c]}
	reporte.value=H
}

function convertir(b,d)
{
	b/=360
	var A,B,C,e
	ctx1.drawImage(image,0,0)
	var imgData=ctx1.getImageData(0,0,cv1.width,cv1.height)
	var c=imgData.data
	for (var i=0;i<imgData.data.length;i+=4)
	{
		a=imgData.data[i+3]
		C=rgb2hsv([c[i+0]/256,c[i+1]/256,c[i+2]/256])
		e=(C[0]+b)%1;if(e<0){e++};if(modo.value=="Absoluto"){e=b}
		A=hsv2rgb([e,C[1],C[2]])
		d=Math.round
		if(modo.value=="rgb2hsv"){A=C}
		B=[d(A[0]*255),d(A[1]*255),d(A[2]*255)]
		B[3]=a;for(f=0;f<4;f++){imgData.data[i+f]=B[f]}
	}
	ctx1.putImageData(imgData,0,0)
}
function clint()
{
	var g=["Pieza de Rompecabezas","Imagen de Avión","Naturaleza"]
	for(var h=0;h<3;h++){if(elegirImagen.value==g[h]){init(h)}}
}
function Guardar()
{
	var pom = document.createElement('a')
    pom.setAttribute('href',cv1.toDataURL("image/png"))
    if(cv1.toDataURL("image/png").length>987654)
    {
    	pom.setAttribute('target','"_blank"')
    	pom.innerHTML="Abrir imagen en una nueva ventana"
    	linkguardar.innerHTML=""
    	linkguardar.appendChild(pom)
    }else
    {
    	pom.setAttribute('download',["Convertido.png"])
    	pom.click()
    }
}
