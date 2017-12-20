function file(name){
	return `
	 mkdir ${name} 
	 cd ${name}
	 touch index.html
	 touch main.scss
	 touch main.js 
	 cd ../
	 `;
}
file('')

function common_file(name,type){
	return `
	 cd common
	 touch ${name}.${type} 
	 cd ../
	 `;
}
common_file('','')