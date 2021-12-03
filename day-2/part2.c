// 
// Read the following code at your own peril...
//

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>

int main() {

    FILE *fp = fopen("data.txt", "r");
    if(!fp) {
        return 1;
    }

    int depth = 0, pos = 0, aim = 0;

    // getline() conveniently allocates a buffer for you if called with NULL and reallocs it if too small
    char *buf = NULL;
    size_t n = 0;
    ssize_t charsRead;
    while((charsRead = getline(&buf, &n, fp)) != -1) {
        char amount = *(char*)(strchr(buf, ' ')+1) - '0'; // you feel a shiver run down your spine
        switch(buf[0]) {
            case 'd': aim += amount; break;
            case 'u': aim -= amount; break;
            case 'f': pos += amount; depth += aim * amount; break;
        }
    }

    printf("%d", pos * depth);
    free(buf);

    return 0;

}