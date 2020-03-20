function rgb2hsv(a)
{
	var b=[0,0,0],c=[0,0,0],d=["min","max"]
	for(var i=0;i<2;i++){c[i*2]=Math[d[i]](a[0],a[1],a[2])}
	if(c[0]==c[2]){b[2]=c[0];return b}
	for(i=0;i<3;i++){if(a[i]==c[0]){d=a[(i+1)%3]-a[(i+2)%3];e=(2*i+3)%6}}
	f=c[2]-c[0];b=[(e*f-d)/(6*f),1/c[2]*f,c[2]]
	return b
}
function hsv2rgb(b)
{
	var a=[0,0,0],c=[],e=false
	if(b[1]==0){a[0]=a[1]=a[2]=b[2];return a}
	b[0]*=6;var i=Math.floor(b[0]),f=b[0]-i
	c=[b[2]*(1-b[1]),b[2]*(1-b[1]*f),b[2]*(1-b[1]*(1-f))]
	a=[c[2],c[0],b[2]];b=[b[2],c[0],c[1]]
	for(var d=0;d<3;d++){
		if(e==false){a=[a[2],a[0],a[1]];b=[b[2],b[0],b[1]]}
		if(i==2*d){e=true};if(i==2*d+1){e=true;a=b}}
	return a
}
