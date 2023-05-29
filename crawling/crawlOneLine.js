const newsStandYonhap = window['EAGER-DATA']['PC-NEWSSTAND-YONHAP'];

const oneLineData = [];
newsStandYonhap.materials.forEach(material => {
  const type = 'NEWS-ONELINE';
  const officeName = material.officeName;
  const title = material.title;
  const url = material.url;

  oneLineData.push({ type: type, officeName: officeName, title: title, url: url });
});

console.log(JSON.stringify(oneLineData));