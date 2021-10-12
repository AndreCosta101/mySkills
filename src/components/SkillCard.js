import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity
      key={"1"}
      style={styles.buttonSkilll}
    >
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkilll: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})

