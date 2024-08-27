// Compile command: clang name_generator.c -DWASM --target=wasm32 -flto --no-standard-libraries -Wl,--allow-undefined -Wl,--export-all -Wl,--no-entry -Wl,-z,stack-size=8388608 -o name_generator.wasm

#if defined(WASM)
extern int rand();
extern void* malloc(int n);
extern unsigned char __heap_base;
unsigned int bump_pointer = &__heap_base;
#else
#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include <memory.h>
#endif

const char* vowels = "aeiou";
const char* consonants = "bcdfghjklmnpqrstvwxyz";
const char* digraphs[] = {"th", "sh", "ch", "ph", "tr", "br", "cr", "dr", "fr", "gr", "pr", "st", "sl", "cl", "fl"};
const char* diphthongs[] = {"ai", "au", "ea", "oi", "ou"};
const int vowels_count = 5;
int consonants_count = 21;
int digraphs_count = 15;
int diphthongs_count = 5;
#define WORST_SYLLABLES_COMBINATION_COUNT 4
#define DIGRAPH_ELEMENT_COUNT 2

static int current_name_size = 0;

char get_vowel() {
    return vowels[rand() % vowels_count];
}

char get_consonant() {
    return consonants[rand() % consonants_count];
}

int add_syllable_to_buffer(char* _buffer, int _index, int _humanoid) {
   if(_humanoid <= 0) {
       switch(rand() % 4) {
           case 0: { _buffer[_index] = get_vowel(); } return 1;                                                                                   // <vow>
           case 1: { _buffer[_index] = get_consonant(); _buffer[_index + 1] = get_vowel(); } return 2;                                            // <con><vow>
           case 2: { _buffer[_index] = get_vowel(); _buffer[_index + 1] = get_consonant(); } return 2;                                            // <vow><con>
           case 3: { _buffer[_index] = get_consonant(); _buffer[_index + 1] = get_vowel(); _buffer[_index + 2] = get_consonant(); } return 3;     // <con><vow><con>
       }
   } else {
       switch(rand() % 5) {
           case 0: { _buffer[_index] = get_vowel(); } return 1;                                                                                   // <vow>
           case 1: { _buffer[_index] = get_consonant(); _buffer[_index + 1] = get_vowel(); _buffer[_index + 2] = get_consonant(); } return 3;     // <con><vow><con>
           case 2: { _buffer[_index] = get_vowel(); _buffer[_index + 1] = get_consonant(); _buffer[_index + 2] = get_vowel(); } return 3;         // <vow><con><vow>
           case 3: {
               const char* _d = digraphs[rand() % digraphs_count];
               _buffer[_index] = _d[0];
               _buffer[_index + 1] = _d[1];
               _buffer[_index + 2] = get_vowel();
               return 3;
           }
           case 4: {
               _buffer[_index] = get_consonant();
               const char* _d = diphthongs[rand() % diphthongs_count];
               _buffer[_index + 1] = _d[0];
               _buffer[_index + 2] = _d[1];
               return 3;
           }
       }
   }

    return 0;
}

const char* generate_random_name_alloc(int _min_syllables, int _max_syllable, int _humanoid) {
    int _alloc_size = _max_syllable * WORST_SYLLABLES_COMBINATION_COUNT;
    char* _random_name = malloc(_alloc_size);

    #if !defined(WASM)
    memset(_random_name, 0, _alloc_size);
    #endif

    int _syllables_amount = rand() % ((_max_syllable + 1) - _min_syllables) + _min_syllables;
    int _buffer_index = 0;
    for(int _i = 0; _i < _syllables_amount; _i++) {
        _buffer_index += add_syllable_to_buffer(_random_name, _buffer_index, _humanoid);
         _random_name[_buffer_index] = '\0';
    }

    current_name_size = _buffer_index;
    return _random_name;
}

int get_current_random_name_size() {
    return current_name_size;
}

#if !defined(WASM)
int main(int _argc, char** _argv) {
    srand(time(0));

    for(size_t _i = 0; _i < 10; _i++) {
        const char* _random_name = generate_random_name_alloc(1, 3, 1);
        printf("%s\n", _random_name);
        free((void*)_random_name);
    }

    return 0;
}
#endif
