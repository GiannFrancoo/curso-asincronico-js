const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


// Estados en un llamado XMLHttpRequest
// 0 Se ha inicializado
// 1 Cargando
// 2 Se termino de cargar
// 3 Procesamiento si exista alguna descarga
// 4 Completado

function fetchData(urlApi, callback){
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", urlApi, true);

	xhttp.onreadystatechange = function (event){
		if (xhttp.readyState === 4){
			if (xhttp.status === 200){
					callback(null, JSON.parse(xhttp.responseText));
			} 
			else{
				const error = new Error("Error" + urlApi + xhttp.status);
				return callback(error, null);
			}           
		}
	}
	xhttp.send();
}


fetchData(`${API}/products`, function(error1, data1){
		if (error1){
			return console.error(error1);
		}
		else{
			fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
					if (error2){
						return console.error(error2);
					}
					else {
						fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
								if (error3){
									return console.error(error3);
								}
								else{
									console.log(data1[0]);
									console.log(data2.title);
									console.log(data3.name);
								}
							}
						)
					}
				}
			)
		}
	}
)

// Aclaración: aca se estan haciendo 3 llamadas a la api para conseguir el dato que se consigue en el primer llamado
// pero es a modo de ver como funca el callback que podes reutilzar

