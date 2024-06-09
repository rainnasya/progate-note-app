import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'


const EditNote = ({setCurrentPage, editNote, noteToEdit}) => {
    const [title, setTitle ] = useState('')
    const [desc, setDesc ] = useState('')
    
    useEffect(() => {
        if (noteToEdit) {
          setTitle(noteToEdit.title)
          setDesc(noteToEdit.desc)
        }
      }, [noteToEdit])

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Update Note</Text>
            <CustomTextInput
                text={title}
                label="Judul"
                placeholder="Judul"
                onChange={setTitle}
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput 
                text={desc}
                label="Deskripsi"
                placeholder="Deskripsi"
                onChange={setDesc}
                multiline
                numberOfLines={4}
            />
            <View style={styles.spacerTop}>
                <CustomButton 
                    backgroundColor="#247881"
                    color="#fff"
                    text="Update"
                    width="100%"
                    onPress={() => {
                        editNote(noteToEdit.id, title, desc)
                        setCurrentPage('home')
                      }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton 
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="100%"
                    onPress= { () => setCurrentPage('home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
    },
    pageTitle: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: '#203239',
    },
    spacerTop: {
      marginTop: 30,
    },
})

export default EditNote