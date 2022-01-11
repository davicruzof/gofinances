import React, { ReactElement, useState } from 'react';
import { Input } from '@components/Forms/Input';
import { Button } from '@components/Forms/Button';
import { CategorySelectButton } from '@components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '@components/Forms/TransactionTypeButton';

import { Container, Title, Header, Form,Fields, TransactionsType } from './styles';

import { CategorySelect } from '@views/CategorySelect'
import { Modal } from 'react-native';

function Register(): ReactElement {

  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='Preço'
          />
          <TransactionsType>
            <TransactionTypeButton 
              type='up'
              title='Income'
              isActive={transactionType === 'up'}
              onPress={() => handleTransactionsTypeSelect('up')}
            />

            <TransactionTypeButton 
              type='down'
              title='Outcome'
              isActive={transactionType === 'down'}
              onPress={() => handleTransactionsTypeSelect('down')}
            />
          </TransactionsType>
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button 
          title='Enviar'
        />
      </Form>


      <Modal
        visible={categoryModalOpen}
      >
        <CategorySelect 
          category={category} 
          setCategory={setCategory} 
          closeSelectCategory={handleCloseSelectCategoryModal} 
        />
      </Modal>
    </Container>
  );
};

export {Register};
