// BEMJSON description of the page will be here
module.exports = {
    block: 'my-block',
    js: true,
    title: 'hello',
    head: [
        {
            elem: 'css', url: 'hello.min.css'
        }
    ],
    scripts: [
        {
            elem: 'js',
            url: 'hello.min.js'
        }
    ],
    content: [
        {
            block: 'Hello',
            content: [
                {
                    elem: 'greeting',
                    content: 'Hello'
                }
            ]
        }
    ]
}
