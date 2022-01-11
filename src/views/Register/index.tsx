import React, { ReactElement, useState } from 'react';
import { 
  Alert,
  Modal, 
  Keyboard, 
  TouchableWithoutFeedback, 
} from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '@components/Forms/Button';
import { CategorySelect } from '@views/CategorySelect';
import { InputForm } from '@components/Forms/InputForm';
import { CategorySelectButton } from '@components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '@components/Forms/TransactionTypeButton';

import { Container, Title, Header, Form,Fields, TransactionsType } from './styles';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('O nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
})

function Register(): ReactElement {

  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria'
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleRegister(form: FormData){

    if(!transactionType)
      return Alert.alert('goFinance','Selecione o tipo da transação')
    
    if(category.key === 'category')
      return Alert.alert('goFinance','Selecione a categoria')
    
    

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              placeholder='Nome'
              control={control}
              name='name'
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
              />
            <InputForm 
              placeholder='Preço'
              control={control}
              name='amount'
              keyboardType='decimal-pad'
              error={errors.amount && errors.amount.message}
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
            onPress={handleSubmit(handleRegister)}
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
    </TouchableWithoutFeedback>
  );
};

export {Register};
