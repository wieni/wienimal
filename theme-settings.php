<?php

function wienimal_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = null)
{
    // Work-around for a core bug affecting admin themes. See issue #943212.
    if (isset($form_id)) {
        return;
    }

    if (\Drupal::service('module_handler')->moduleExists('wienimal_admin_toolbar')){
        $form['admin_toolbar'] = [
          '#type' => 'details',
          '#attributes' => ['class' => ['styles']],
          '#title' => t('Toolbar settings'),
          '#weight' => -899,
          '#group' => 'omega',
          '#open' => TRUE,
          '#tree' => TRUE,
        ];

        $form['admin_toolbar']['toolbar_theme'] = [
          '#type' => 'select',
          '#options' => [
            'light' => t('Light'),
            'dark' => t('Dark'),
          ],
          '#title' => t('Toolbar Theme'),
          '#default_value' => \Drupal::config('wienimal.settings')->get('toolbar.theme'),
          '#description' => t('The theme for the toolbar'),
        ];

        $form['#submit'][] = 'wienimal_form_settings_submit';
    }
}

function wienimal_form_settings_submit(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
    $values = $form_state->getValue('admin_toolbar');
    \Drupal::service('config.factory')->getEditable('wienimal.settings')->set('toolbar.theme', $values['toolbar_theme'])->save();
}
