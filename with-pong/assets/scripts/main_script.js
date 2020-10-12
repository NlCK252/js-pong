class pong_game{

    initialize_output(){
        this.game_output_container = document.getElementById('game_output_container');
        this.game_output = document.getElementById('game_output');
        this.game_output_context = game_output.getContext('2d');
    }

    set_game_output_dimensions(){
        this.game_output.width = game_output_container.offsetWidth;
        this.game_output.height = game_output_container.offsetHeight;
    }

    set_objects() {
        this.object = [];
    }

    create_object({fill='', width=0, height=0, x_momentum=0, y_momentum=0, x_distance=0, y_distance=0, x_position=0, y_position=0, a={}}={}) {
        const default_fill = '#ffffff';
        const default_dimension = '';
        let object_index = this.object.length;
        this.object.push({});
        this.object[object_index].fill = (/^#[0-9A-F]{6}$/i.test(fill)) ? fill : default_fill;
        this.object[object_index].dimension = {'width': parseInt(width), 'height': parseInt(height)};

        this.object[object_index].keypress = 'a';
        this.object[object_index].momentum = {'x': x_momentum, 'y': y_momentum};
        this.object[object_index].distance = {'x': x_distance, 'y': y_distance};
        this.object[object_index].position = {'x': x_position, 'y': y_position};

        console.log(this.object)

    }
