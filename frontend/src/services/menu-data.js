export default {

    // home is a section without childs, set as an empty array
    home: [],

    about: [],

    products: [

        {
            type: 'title',
            txt: 'Products',
            icon: 'fa fa-tag context-menu__title-icon',
        },

        {
            type: 'link',
            txt: 'List Products',
            link: 'list-prod',
        },

        {
            type: 'link',
            txt: 'Add New Product',
            link: 'add-prod',
        },

        {
            type: 'link',
            txt: 'Manage Categories',
            link: 'manage-cat',
        },

    ],

    customers: [

        {
            type: 'title',
            txt: 'Customers',
            icon: 'fa fa-users context-menu__title-icon',
        },

        {
            type: 'link',
            txt: 'List Customers',
            link: 'list-customer',
        },

        {
            type: 'link',
            txt: 'List Contacts',
            link: 'list-contac',
        },

        {
            type: 'link',
            txt: 'List Newsletters',
            link: 'list-new',
        },

    ],
};