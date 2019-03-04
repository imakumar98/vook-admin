import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Link from 'next/link';
import {Mutation} from 'react-apollo';
import {DELETE_BOOK_MUTATION,GET_ALL_BOOKS_QUERY} from './../../lib/QueryMutations'; 


class BookDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bookId : this.props.bookId
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
      e.preventDefault();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Link href=""><a onClick={this.toggle}>REMOVE</a></Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete Confirmation</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this book?
          </ModalBody>
          <ModalFooter>
            <Mutation mutation={DELETE_BOOK_MUTATION} variables={{id : this.state.bookId}} refetchQueries={[{query:GET_ALL_BOOKS_QUERY} ]}>
                {(deleteBook,{loading,error})=>(
                    <span>
                        <Button color="danger" onClick={async()=>{
                            const res = await deleteBook();
                            console.log(res);
                        }}>
                            {loading && 'DELETING'}
                            {!loading && 'YES'}
                        </Button>
                        <Button color="secondary" style={{marginLeft:'10px'}} onClick={this.toggle}>NO</Button>
                    </span>
                )}
                
            </Mutation>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BookDeleteModal;