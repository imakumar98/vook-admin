import gql from 'graphql-tag';

const GET_ALL_BOOKS_QUERY = gql`
    query GET_ALL_BOOKS_QUERY {
        getAllBooks{
            id
            title 
            author
            dateTime 
            publisher{
                name
                discount
            }
            category{
                name
            }
            type{
                name
            }
            mrp
            images{
                src
            }
            sku
        }
    }
    
`;

const GET_PUBLISHERS_QUERY = gql`
    query GET_PUBLISHERS_QUERY{
        getPublishers{
            id
            name
            discount
            books{
                id
            }
        }
    }
`;

const GET_CATEGORIES_QUERY = gql`
    query GET_CATEGORIES_QUERY{
        getCategories{
            id
            name
            books{
                id
            }
        }
    }
`;

const GET_TYPES_QUERY = gql`
    query GET_TYPES_QUERY{
        getTypes{
            id
            name
            books{
                id
            }
        }
    }
`;

const CREATE_BOOK_MUTATION = gql`
    mutation CREATE_BOOK_MUTATION(
        $title: String!, 
        $author: String!, 
        $publisher: String!, 
        $type: String!, 
        $subject: String!, 
        $category: String!, 
        $edition: Int!, 
        $quantity: Int!, 
        $detail: String!, 
        $description: String
        $mrp: Int!, 
        $tags: [String!],
        $images: [String!],
        $slug: String!){
        createBook(
            title: $title,
            author: $author,
            publisher: $publisher,
            type: $type,
            subject: $subject,
            category: $category,
            edition: $edition, 
            quantity: $quantity, 
            detail: $detail, 
            description: $description
            mrp: $mrp, 
            tags: $tags, 
            images: $images, 
            slug: $slug
         ){
            id
            title
            mrp
            detail
            publisher{
                name
            }
            slug
        }
    }
`;

export {
    GET_CATEGORIES_QUERY,
    GET_TYPES_QUERY,
    GET_PUBLISHERS_QUERY,
    GET_ALL_BOOKS_QUERY,

    CREATE_BOOK_MUTATION
    
};
