import { Button } from '@components/Forms/Button';
import React from 'react';
import { FlatList } from 'react-native';
import { categories } from 'utils/categories';

import { Container, Header, Title, Category, Icon, 
  Name, Separator, Footer } from './styles';

interface Category {
  key: string;
  name: string;
}

export interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
 
function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: Props) {


  function handleCategorySelect(category: Category){
    setCategory(category)
  }

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>
      <FlatList 
        data={categories}
        keyExtractor={(item) => item.key}
        style={{width: '100%', flex: 1}}
        renderItem={({item}) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={ category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button 
          title='Selecionar'
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
};

export {CategorySelect};
