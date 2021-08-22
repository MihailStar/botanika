const $map = document.querySelector<HTMLDivElement>('.js-map');

if ($map === null) {
  throw new Error('Сontainer not found');
}

ymaps.ready(() => {
  const map = new ymaps.Map(
    $map,
    {
      center: [59.938635, 30.323118],
      controls: [],
      zoom: 17,
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  map.behaviors.disable('scrollZoom');
});
