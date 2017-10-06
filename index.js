var fs = require('fs')

if(process.argv.length < 5){
  console.log('Please provide at least the path to the vis repo, the repo url and the name of the new vis module')
  process.exit()
}

var path = process.argv[2],
  visname = process.argv[3],
  giturl = process.argv[4],
  author = process.argv[5] || 'AUTHOR',
  title = process.argv[6] || 'VIS TITLE'

if (!fs.existsSync(path)) {
  console.log('It looks like the provided repo path is incorrect')
  process.exit()
}

var search_replace = {
  visname:visname,
  giturl:giturl,
  author:author,
  title:title
}

function writeFolder(folder, target){
  fs.readdirSync(folder).forEach(file => {
    if(file != '.DS_Store' && file != '' && file != '.'  && file != 'tests'){
      var content = fs.readFileSync(folder+'/'+file, 'utf8')
      for(var key in search_replace){
        content = content.split('{{'+key+'}}').join(search_replace[key])
      }
      fs.writeFileSync(target+'/'+file, content, 'utf8')
    }
  })
}

writeFolder(__dirname + '/assets',path)

if (!fs.existsSync(path+'/tests')){
    fs.mkdirSync(path+'/tests')
}

writeFolder(__dirname + '/assets/tests',path+'/tests')

console.log('boilerplate created. have fun.')
process.exit()