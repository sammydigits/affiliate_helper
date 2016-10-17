var product = [];
var brand = [];
var metas = document.getElementsByTagName('meta');
for (var index in metas) {
  var meta = metas[index];
  var metaProperty = meta.property;
  if (metaProperty === "og:title") {
    product.push(meta.content);
  }
  if (metaProperty === "product:brand") {
    brand.push(meta.content);
  }  
}
chrome.runtime.sendMessage({method:"productInfo",product:product,brand:brand});
