# Books Server
## BD
    * MongoDB Cloud Mongo Atlas
        * Servicio Cloud configurado
            - Si resulta algun error de conexion seria debido al acceso por IP en el cluster de Atlas, en mi configuracion esta expuesto para aprobar calquier IP.
    * MongoDB Local
		* Descargamos MongoDB https://www.mongodb.com/try/download/community version 5.0.2
		* Creamos directorio en C las carpetas data/db en Windows
		* Instalamos MongoDB personalizado que se ubique la instalacion en C
			* En los pasos de siguiente y siguiente hay una opcion para que este se
				instale como servicio de Windows
			* En las opciones para instalacion de Mongo Compass un manejador entorno grafico
				Pueden omitirlo e instalar una solucion mas sencilla llamada Robomongo
				pueden descargarlo en https://robomongo.org/download
				seleccionando la opcion en la derecha Download Robo 3T Only
		* Al finalizar la instalacion de Mongo se creara el directorio como MongoDB en C
		* Verificamos el servicio de Windows de MongoDB que se este ejecutando

## BackEnd
	* Instalar GIT https://git-scm.com/
	* Instalar nodejs https://nodejs.org/es/ seleccionar la version LTS 14.17
	* Abrimos la Consola / Terminal y tecleamos npm install yarn -g
	* Donde hayamos abierto la consola / terminal en el directorio de preferencia
		descargamos / clonamos el repositorio, 
		tecleamos git clone https://github.com/luiser8/booksgraphql.git
    * Instalamos dependencias yarn install
	* En el archivo config/config.js colocamos el puerto y el servidor local de mongoDB o por 
        cloud Mongo Atlas
    * En el archivo db/dbConn.js esta especificado el ambiente por production por defecto se 
        intentara conectar por Mongo Atlas, de lo contrario modificar la variable env por development
	* Ejecutamos npm start
	* Verificar con el navegador web
		- http://localhost:9000/
		- http://localhost:9000/graphql

## CRUD
    * Mutation
        mutation CreateBookMutation {
            createBook(input: {
                name: "Algun libro",
                author: "Algun Autor",
                edition: 1, 
                editorial: "Alguna editiorial"
            }),{
                id
            }
        }
        mutation EditBookMutation {
            editBook(input: {
                id: "614619cbeab51cac8df5cc63",
                name: "Algun otro libro",
                author: "Algun otro Autor",
                edition: 2, 
                editorial: "Alguna otra editiorial"
            }) {
                id
            }
        }
        mutation DeleteBookMutation {
            deleteBook(id: "614552aae2fb43b3f7b04f2b") {
                id
            }
        }
    * Query
        query Query {
            getAllBooks {
                id, name, author, edition, editorial
            },
              getIdBooks(id: "614619cbeab51cac8df5cc63") {
                name, author, edition, editorial
            }
        }
