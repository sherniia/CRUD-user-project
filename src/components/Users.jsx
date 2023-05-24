import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table, Container, Row, Col, Button, Modal } from "react-bootstrap";

import UsersTable from "./UsersTable";
import Search from "./Search";
import Loader from "./Loader";
import ModalWindowUpdate from "./ModalWindowUpdate";
import ModalWindowCreate from "./ModalWindowCreate";


const url = "https://61008c3dbca46600171cf917.mockapi.io/api/v1/users";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [createdUser, setCreateUser] = useState({});
  

  const toggleModalUpdate = () => {
    setShowUpdate(!showUpdate);
  };
  const toggleModalCreate = () => {
    setShowCreate(!showCreate);
  };

  const setUser = (id) => {
    setSelectedUser(users.filter((user) => user.id === id)[0]);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setUsers(data);
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    } finally {
      console.log("final block");
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.firstname
      .toLowerCase()
      .includes(searchQuery.toLocaleLowerCase());
  });

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("final block");
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`${url}/${id}`, updatedUser);
      fetchUsers();
    } catch (err) {
      console.log(err);
    } finally {
      console.log("user updated");
    }
  };
  const createUser = async (createdUser) => {
    try {
        await axios.post(`${url}`, createdUser);
        fetchUsers();
    } catch(err) {
        console.log(err)
    } finally {
        console.log('user created')
    }
  }

  return (
    <div>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Row className="mb-3 mt-3">
              <Col className="text-start">
                <Search handleSearch={handleSearch}></Search>
              </Col>
              <Col className="text-end">
                <Button variant ='success' onClick = {() => {
                    toggleModalCreate();
                }}>Create a User</Button>
              </Col>
            </Row>
            <UsersTable
              users={filteredUsers}
              deleteUser={deleteUser}
              error={errorMessage}
              toggleModal={toggleModalUpdate}
              setUser = {setUser}
            ></UsersTable>
          </>
        )}
        <ModalWindowUpdate
          show={showUpdate}
          toggleModal={toggleModalUpdate}
          selectedUser={selectedUser}
          setSelectedUser = {setSelectedUser}
          updateUser={updateUser}
        ></ModalWindowUpdate>
        <ModalWindowCreate
          show={showCreate}
          toggleModal={toggleModalCreate}
          createUser={createUser}
          setCreatedUser={setCreateUser}
          createdUser={createdUser}
        ></ModalWindowCreate>
      </Container>
    </div>
  );
}
