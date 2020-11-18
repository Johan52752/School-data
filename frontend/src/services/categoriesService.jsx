class CategoriesService {
 categories = [
     {
        title: "Matematicas",
        description: "Revisa las publicaciones de algebra, geometria, trigonometria y estadistica que tenemos!",
        link: "math"
     },
     {
        title: "Sociales",
        description: "Revisa las publicaciones de geografia, historia y antropologia que tenemos!",
        link: "soc"
     },
     {
        title: "Ciencias",
        description: "Revisa las publicaciones de fisica, quimica, biologia y anatomia que tenemos!",
        link: "cienc"
     },
     {
        title: "Español",
        description: "Revisa las publicaciones de tipos de textos, ortografia y lectura critica que tenemos!",
        link: "esp"
     },
     {
        title: "Ingles",
        description: "Revisa las publicaciones de verb to be, gramatical times y active and passive voice que tenemos!",
        link: "ing"
     },
     {
        title: "Artistica",
        description: "Revisa las publicaciones de historia del arte, composicion, artistas y pintura que tenemos!",
        link: "art"
     },
 ]

 getCategories = () => {
     return this.categories
 }
}

export default CategoriesService