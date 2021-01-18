import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  function createProperty(keyValue) {
    const nameElement = createElement({ tagName: 'div', className: 'fighter-preview___property' });
    nameElement.innerText = keyValue.join(': ').replace(/(\w+):/, subStr => subStr.toUpperCase());
  
    return nameElement;
  }

  function createPreviewImage(source) {
    const attributes = { src: source };
    const imgElement = createElement({
      tagName: 'img',
      className: 'fighter-image___preview',
      attributes
    });
    imgElement.style.height = '400px'
    if(position === 'right') {
      imgElement.style.transform = 'scale(-1, 1)';
    }
  
    return imgElement;
  }
  if(fighter){
    const fighterArr = [{...fighter}]
    const imageSource = fighter.source
    const image = createPreviewImage(imageSource)
   

    fighterArr.map(fighter=>{
        
    const text = `
    <div>
    <div>name: ${fighter.name}</div>
    <div>health: ${fighter.health}</div>
    <div>attack: ${fighter.attack}</div>
    <div>defense: ${fighter.defense}</div>
    <div>
    `
          
    fighterElement.innerHTML = text
    })
    fighterElement.prepend(image) 
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
