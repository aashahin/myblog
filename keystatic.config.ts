import {config, fields, collection} from '@keystatic/core';

export default config({
    storage: {
        kind: 'cloud',
    },
    cloud: {
        project: 'fonoq/myblog'
    },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: {contentField: 'content'},
            schema: {
                title: fields.slug({name: {label: 'Title'}}),
                description: fields.text({label: 'Description'}),
                content: fields.markdoc({
                    label: 'Content',
                    options: {
                        image: {
                            directory: 'src/assets/images/posts',
                            publicPath: '@assets/images/posts/'

                        }
                    }
                }),
                date: fields.date({label: 'Date'}),
                tags: fields.array(
                    fields.relationship({
                        label: 'Tags',
                        collection: 'tags',
                        description: 'Tags for this post',
                    })
                )
            },
        }),
        tags: collection({
            label: 'Tags',
            slugField: 'name',
            path: 'src/content/tags/*',
            format: {contentField: 'content'},
            schema: {
                name: fields.slug({name: {label: 'Name'}}),
            },
        }),
    },
});