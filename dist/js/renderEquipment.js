const equipment = [
    { id: 1, title: 'Camión VW 23220, camión Mercedes 1318 y 1621, camión Iveco 170E25', imgSrc: '../dist/assets/nidansur-sa-nuestros-equipos-maquinaria-vial-transporte-florida-durazno-uruguay-1.jpg' },
    { id: 2, title: 'Motoniveladora Cowdin CM165H, Retroexcavadoras JCB 3C y New Holland B90B', imgSrc: '../dist/assets/nidansur-sa-nuestros-equipos-maquinaria-vial-transporte-florida-durazno-uruguay-2.jpg' },
    { id: 3, title: 'Excavadora JCB JS130', imgSrc: '../dist/assets/nidansur-sa-nuestros-equipos-maquinaria-vial-transporte-florida-durazno-uruguay-3.jpg' },
    { id: 4, title: 'Camión Mercedes 1630', imgSrc: '../dist/assets/nidansur-sa-nuestros-equipos-maquinaria-vial-transporte-florida-durazno-uruguay-4.jpg' }
]

const d = document,
    $container = d.getElementById('equipmentGrid'),
    $fragment = d.createDocumentFragment(),
    $imgModal = d.getElementById('imgModal'),
    $imgModalWrapper = d.getElementById('image-wrapper')

const renderEquipment = () => {
    equipment.forEach(el => {
        const $itemContainer = d.createElement('div'),
            $equipmentTitleContainer = d.createElement('div'),
            $title = d.createElement('p')
        $itemContainer.classList.add('item')
        $itemContainer.style.backgroundImage = `url(${el.imgSrc})`
        $equipmentTitleContainer.classList.add('equipment-title')
        $title.innerText = el.title
        $equipmentTitleContainer.appendChild($title)
        $itemContainer.appendChild($equipmentTitleContainer)
        $fragment.appendChild($itemContainer)
    })
    $container.appendChild($fragment)
}

renderEquipment()