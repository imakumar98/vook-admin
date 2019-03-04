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

const DELETE_BOOK_MUTATION = gql`
    mutation DELETE_BOOK($id:String!){
        deleteBook(id:$id){
            message
        }
    }
`;

const GET_SINGLE_BOOK = gql`
    query GET_SINGLE_BOOK($id:String!){
        getSingleBook(id:$id){
            id
            title
            publisher{
                name
            }
            category{
                name
            }
            type{
                name
            }
            author
            edition
            tags{
                text
            }
            images{
                src
            }
            mrp
            detail
            description
            quantity
            slug
            subject
        }
    }
`;

const UPDATE_BOOK_MUTATION = gql`
    mutation UPDATE_BOOK_MUTATION(
        $id: String!,
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
     updateBook(
        id: $id,
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
        message
     }   
    }
`;

export {
    GET_CATEGORIES_QUERY,
    GET_TYPES_QUERY,
    GET_PUBLISHERS_QUERY,
    
    GET_ALL_BOOKS_QUERY,
    GET_SINGLE_BOOK,
    CREATE_BOOK_MUTATION,
    DELETE_BOOK_MUTATION,
    UPDATE_BOOK_MUTATION
    
};
