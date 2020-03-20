function esNav()
{
	//Versión simplificada de http://www.anycode.es/detectar-navegador-y-su-version-con-javascript/
	var a=["chrome","safari","firefox","msie"],b=[],c=0
	for(var i=0;i<a.length;i++){if(navigator.userAgent.toLowerCase().search(a[i])>-1){b[c]=a[i];c++}}
	if(b==[a[0],a[1]]){b="chrome"}else{b=b[0]}
	return b
}
